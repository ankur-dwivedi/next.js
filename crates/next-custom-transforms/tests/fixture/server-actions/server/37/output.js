/* __next_internal_action_entry_do_not_use__ {"3128060c414d59f8552e4788b846c0d2b7f74743":"$$RSC_SERVER_CACHE_0"} */ import { registerServerReference } from "private-next-rsc-server-reference";
import { encryptActionBoundArgs, decryptActionBoundArgs } from "private-next-rsc-action-encryption";
import { cache as $$cache__ } from "private-next-rsc-cache-wrapper";
export var $$RSC_SERVER_CACHE_0 = $$cache__("default", "3128060c414d59f8552e4788b846c0d2b7f74743", async function fn() {
    return 'foo';
});
var fn = registerServerReference("3128060c414d59f8552e4788b846c0d2b7f74743", $$RSC_SERVER_CACHE_0);
async function Component() {
    const data = await fn();
    return <div>{data}</div>;
}
import { ensureServerEntryExports } from "private-next-rsc-action-validate";
ensureServerEntryExports([]);
