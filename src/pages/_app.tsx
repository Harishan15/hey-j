import "../../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeProvider from "../context/ThemeContext";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { supabaseClient } from "../libs/client";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const user = supabaseClient.auth.user();

	useEffect(() => {
		const { data: authListener } = supabaseClient.auth.onAuthStateChange(
			(event, session) => {
				handleAuthSession(event, session);
				if (event === "SIGNED_IN") {
					const signedInUser = supabaseClient.auth.user();
					// @ts-ignore
					const userId = signedInUser.id;

					supabaseClient
						.from("profiles")
						.upsert({ id: userId })
						// @ts-ignore
						.then((_data: any, error: any) => {
							if (!error) {
								router.push("/");
							}
						});
				}
				if (event === "SIGNED_OUT") {
					router.push("/#signin");
				}
			}
		);

		return () => {
			// @ts-ignore
			authListener.unsubscribe();
		};
	}, [router]);

	useEffect(() => {
		if (user) {
			if (router.pathname === "/#signin") {
				router.push("/");
			}
		}
	}, [router.pathname, user, router]);

	const handleAuthSession = async (event: any, session: any) => {
		await fetch("/api/auth", {
			method: "POST",
			headers: new Headers({ "Content-Type": "application/json" }),
			credentials: "same-origin",
			body: JSON.stringify({ event, session }),
		});
	};

	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
