import Fastify from "fastify";
import sensible from "@fastify/sensible";

import jwtPlugin from "./plugins/jwt";

export const app = Fastify({
    logger:true
});

app.register(sensible);
app.register(jwtPlugin);
