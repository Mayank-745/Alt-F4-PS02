class Dashboard extends React.Component {
    state = {
        resources: [
            { id: 1, type: 'Water', location: "12.9716° N, 77.5946° E", status: 'Urgent', quantity: '5000 L' },
            { id: 2, type: 'Medical Kits', location: "13.0827° N, 80.2707° E", status: 'In Transit', quantity: '200 Units' },
            { id: 3, type: 'Food Packets', location: "17.3850° N, 78.4867° E", status: 'Stable', quantity: '10,000 Meals' }
        ]
    }

    componentDidMount() {
        // Initialize map
        this.map = L.map('map').setView([20.5937, 78.9629], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    }

    render() {
        return (
            <div className="dashboard">
                <div className="header">
                    <h1>Disaster Resource Network</h1>
                    <p>Real-time resource allocation dashboard</p>
                </div>
                
                <div className="map-container">
                    <div id="map" style={{ height: '100%' }}></div>
                </div>

                <div className="resource-grid">
                    {this.state.resources.map(resource => (
                        <div key={resource.id} className="resource-card">
                            <h3>{resource.type}</h3>
                            <p>Location: {resource.location}</p>
                            <p>Status: <span style={{ color: resource.status === 'Urgent' ? 'var(--alert)' : 'var(--secondary)' }}>
                                {resource.status}
                            </span></p>
                            <p>Quantity: {resource.quantity}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));
