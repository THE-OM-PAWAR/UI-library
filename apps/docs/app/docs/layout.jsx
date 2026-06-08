import { DocsSidebar } from "../../components/docs/sidebar.jsx";

export default function DocsLayout({ children }) {
    return (
        <div className="flex min-h-screen overflow-x-hidden">
            <DocsSidebar />
            <div className="flex-1 md:ml-80 min-w-0">
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}
