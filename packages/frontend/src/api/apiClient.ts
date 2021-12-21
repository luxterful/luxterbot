import { apiClient } from "service-1";

// we ensure that this variable is set in vue.config.js
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const service_1_url = process.env.VUE_APP_SERVICE_1_URL!;
const client = apiClient(service_1_url);

export { client };
