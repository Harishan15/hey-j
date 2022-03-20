import { supabaseClient } from "../../libs/client";

export default function handler(req: any, res: any) {
	supabaseClient.auth.api.setAuthCookie(req, res);
}
