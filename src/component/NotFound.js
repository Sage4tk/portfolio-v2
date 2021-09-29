import { Helmet } from "react-helmet"

export default function NotFound() {
    return (
        <div className="notfound">
            <Helmet>
                <title>404 Page Not Found</title>
            </Helmet>
            <div>
                <h1>404 / Page Not Found</h1>
                <p>Go back maybe?</p>
            </div>
        </div>
    )
}