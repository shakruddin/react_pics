import React, { Component } from 'react'
import { Input, Segment, Form } from 'semantic-ui-react'

export class Search extends Component {
    state = { term: '' }

    onInputChange = () => {
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <Segment style={{ marginTop: '10px' }}>
                <Form onSubmit={this.onInputChange}>
                    <Form.Field>
                        <label>Image Search</label>
                        <Input fluid size="big"  icon='search' onChange={e => this.setState({ term: e.target.value })} />
                    </Form.Field>
                </Form>
            </Segment>
        )
    }
}

export default Search
