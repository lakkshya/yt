import {
    Navbar,
    Container,
    Nav,
    InputGroup,
    FormControl,
    Button,
} from "react-bootstrap";
const CustomAppBar = ({ label, onSearch }) => {
    return (
        <Navbar bg="dark" expand="lg" sticky="top" className="px-3">
            <Container fluid>
                <Navbar.Brand>
                    <img src="../logo.svg" alt="logo" height={70} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav>
                    <InputGroup>
                        <FormControl
                            placeholder="Search on YT"
                            aria-label="search on YT"
                            aria-describedby="basic-addon2"
                            onChange={onSearch}
                        />
                        <Button variant="danger" type="submit">
                            Search
                        </Button>
                        
                    </InputGroup>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default CustomAppBar;