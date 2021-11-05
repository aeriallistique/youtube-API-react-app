import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    state = { videos: [], videoSelect: null}

    componentDidMount(){
        this.onTermSubmit('react project');
    }
    onTermSubmit = async term =>{
        const response =  await youtube.get('/search', {
            params: {
                q: term
            }
        });
            this.setState({videos: response.data.items,
                            videoSelect: response.data.items[0] })
    } 
    onVideoSelect = video => {
        //console.log(video)
        this.setState({videoSelect: video});
    }
    render(){
        return( 
        <div className="ui container">
            <SearchBar onTermSubmit={this.onTermSubmit} />
            <div className="ui grid">
                <div className="row">
                    <div className="ten wide column">
                        <VideoDetail selectedVid={this.state.videoSelect} />
                    </div>
                    <div className="six wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default App;