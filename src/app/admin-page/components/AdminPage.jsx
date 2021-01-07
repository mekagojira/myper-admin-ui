import Header from './Header';
import Container from './Container';
import Dashboard from '../../dashboard/components/Dashboard';

export default function AdminPage(props) {
    return (
        <div>
            <Header />
            <Container>
                <Dashboard />
            </Container>
        </div>
    );
}
