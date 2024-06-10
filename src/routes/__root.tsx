import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { artificialDelay } from "../utils/delay";

export const Route = createRootRoute({
	// Summed up error should look like this:
	// `Types of parameters 'val' and 'opts' are incompatible.`
	// `Types of property 'search' are incompatible.`
	// `Type 'RootSearchSchema' is not assignable to type 'never'.`
	beforeLoad: artificialDelay(),
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<div className="p-2 flex gap-2 text-lg">
				<Link
					to="/"
					activeProps={{
						className: "font-bold",
					}}
					activeOptions={{ exact: true }}
				>
					Home
				</Link>{" "}
				<Link
					to={"/about"}
					activeProps={{
						className: "font-bold",
					}}
				>
					About
				</Link>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools position="bottom-right" />
		</>
	);
}
