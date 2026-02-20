import { Links, Meta, Scripts, ScrollRestoration } from "react-router";


export function Layout({ children }: { children: React.ReactNode }) {
  return (
  <>
    <div className = "border-5 p-5">
      <h1 className="text-7xl">Life OS</h1>
    </div>
    <div>
      {children}
    </div>
  </>
    );
}
