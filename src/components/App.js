import React, {Component} from 'react'
import unsplash from '../api/unsplash'
import { Container, Segment } from 'semantic-ui-react'
import Search from './Search'
import ImageList from './Images'

class App extends Component {
    state = { image: [] }
    onSearch = async term => {
        const response = await unsplash.get('/search/photos', {
            params:{query: term},
        })
        this.setState({ image: response.data.results })
    }
    render(){
        return (
        <Container>
            <Search onSubmit={this.onSearch} />
                <Segment style={{ marginTop: '10px', marginBottom: '15px' }}>
                    results {this.state.image.length} images
                </Segment>
            <ImageList images={this.state.image} />
        </Container>
        )
    }
}

export default App
