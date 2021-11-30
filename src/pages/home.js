import CustomAppBar from "../components/CustomAppBar";
import { useState, useEffect } from "react";
import CustomTile from "../CustomTile/CustomTile";
import { Row, Spinner, Button, Container } from "react-bootstrap";
const Home = () => {
    const [videos, setVideos] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        async function getVideos() {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/videos`, {
                method: "GET",
            });
            const data = await response.json();
            setVideos(data);
        }
        getVideos();
    }, []);
    return (
        <div>
            <CustomAppBar
                label="Search"
                onSearch={(event) => {
                    setSearchText(event.target.value);
                }}
            />
            <Container fluid>
                {videos.length === 0 ? (
                    <Spinner animation="grow" variant="light" className="m-auto" style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }} />
                ) : (
                    <Row xs={1} md={4} className="g-4 p-5">
                        {videos
                            .filter((e) =>
                                searchText.length !== 0
                                    ? e.title.toLowerCase().includes(searchText.toLowerCase())
                                    : true
                            )
                            .map((e) => (
                                <CustomTile
                                    title={e.title}
                                    uploadedAgo={e.uploadedAgo}
                                    uploadedBy={e.uploadedBy}
                                    image={e.image}
                                    views={e.views}
                                />
                            ))}
                    </Row>
                )}
                <Row className="p-4">
                    <Button variant="outline-light" href="/license">
                        License
                    </Button>
                </Row>
            </Container>
        </div>
    );
};

export default Home;