import React, {Component} from 'react';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'react';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hits: [],
            loading: false,
            page: 1,
        };
        this.setLoading = this.setLoading.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    setLoading(loading) {
        this.setState({loading})
    }

    deleteItem = (index) => {
        let hits = [...this.state.hits];
        if (index > -1) {
            hits.splice(index, 1);
            this.setState({hits});
        }

    }

    loadMore() {
        this.loadHits(this.state.page + 1);
    }

    componentDidMount() {
        this.setLoading(true);
        this.loadHits(1)
    }

    loadHits = (page) => {
        fetch(API + DEFAULT_QUERY + '&page=' + page)
            .then(response => response.json())
            .then(data => this.setState({hits: [...this.state.hits, ...data.hits], page: data.page}))
            .finally(() => this.setLoading(false));
    }

    render() {
        const {loading, hits} = this.state;
        return (
            <>
                {loading && <p>Loading...</p>}
                {!loading && <table className='table table-dark table-striped'>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Created At</th>
                    </tr>
                    </thead>
                    <tbody>
                    {hits.map((item, index) => <tr key={item.objectID}>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>{item.created_at}</td>
                        <td>
                            <button onClick={() => this.deleteItem(index)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>)}
                    </tbody>
                </table>}
                {!loading && <div className='d-flex justify-content-center pb-3'>
                    <button className='btn btn-primary' onClick={this.loadMore}>Load More</button>
                </div>}
            </>
        );
    }

}


export default App;
