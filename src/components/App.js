import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideosList from "./VideosList";
import VideoDetail from "./VideoDetail";


class App extends Component {
        
    state = {videos: [],selectedVideo:null }
    onSearchSubmit = async (searchTerm) => {
        const responce = await youtube.get("/search",{
            params: {
                q: searchTerm,
            }
        })
        this.setState({videos: responce.data.items,selectedVideo: responce.data.items[0]})
    }

    componentDidMount(){
        this.onSearchSubmit("youtube")
    }

    onSelectVideo = (selectedVideo) =>{
        this.setState({selectedVideo: selectedVideo})
    } 

    render(){
        return(
            <div className="ui container" style={{marginTop: "10px"}}>
                <div>
                    <SearchBar onSearchSubmit={this.onSearchSubmit} />
                </div>
                <div className="ui grid">
                    <div className="ui row"> 
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                        <VideosList videos={this.state.videos} onSelectVideo={this.onSelectVideo} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App