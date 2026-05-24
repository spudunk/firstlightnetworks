import type { PageServerLoad } from "./$types";

const contact = {
  tel: btoa('(360) 827-2736'),
  telLink: btoa('tel:+13608272736'),
  email: btoa('chris@firstlightnetworks.com'),
  emailLink: btoa('mailto:chris@firstlightnetworks.com?subject=Custom%20Quote')
}

export const load: PageServerLoad = async ({ params }) => {
  return {
    contact
  };

}