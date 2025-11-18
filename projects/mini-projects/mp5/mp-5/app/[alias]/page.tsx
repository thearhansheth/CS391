import getUrlByAlias from "@/lib/getUrlByAlias";
import { redirect } from "next/navigation";

export default async function AliasRedirectPage({ params }: { params: { alias: string } }) {
    const { alias } = params;
    console.log("Looking up alias:", alias);
    const urlEntry = await getUrlByAlias(alias);
    console.log("urlEntry:", urlEntry);
    if (!urlEntry) {
        redirect("/");
    }
    redirect(urlEntry.longUrl);
}
