/**
 * For more information see: https://github.com/davibaltar/swagger-autogen#openapi-3x
 */
const swagger_autogen = require("swagger-autogen")({ openapi: "3.0.0" });

// Data schemas
const mongo_specs = {
    Airlines: {
        type: "object",
        properties: {
            IATA_CODE: {
                type: "string",
            },
            AIRLINE: {
                type: "string",
            },
        },
    },
    Airports: {
        type: "object",
        properties: {
            IATA_CODE:{
                type: "string",
            },
            AIRPORT: {
                type: "number",
            },
            CITY: {
                type: "string",
            },
            STATE: {
                type: "string",
            },
            COUNTRY: {
                type: "string",
            },
        },
    },
    Flights: {
        type: "object",
        properties: {
            AIRLINE:{
                type: "string",
            },
            FLIGHT_NUMBER: {
                type: "number",
            },
            ORIGIN_AIRPORT: {
                type: "string",
            },
            ARRIVAL_AIRPORT: {
                type: "string",
            },
            CANCELLED: {
                type: "boolean",
            },
            DEPARTURE_DATE: {
                type: "date",
            },
            ARRIVAL_DATE: {
                type: "date",
            },
        },
    },
};

 
// API general specs
const general_specs = {
    info: {
        title: "Watson Airlines Assistant",
        description:
            "This is a REST API for the Watson Airlines Customer Experience use case.",
        contact: {
            name: "Federico Friedmann",
            email: "federicofriedmann@ibm.com",
        },
        version: "1.0.0",
    },
    servers: [
        {
            url : "https://localhost:30120",
            description : "Local Host",
        },
        {
            url: "https://{app-name}.{cloud-region}.codeengine.appdomain.cloud",
            description: "IBM Code Engine Deployment",
        },
    ],
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    security: [],
    components: {
        schemas: mongo_specs,
    },
};

// API Routes
// NOTE: if using Express Router, pass only the root file where the route starts.
const api_routes = [
    "./app.js",
];

// Output file path
const output_file_path = "./openapi-spec.json";

// Generate OpenAPI spec
swagger_autogen(
    (outputFile = output_file_path),
    (endpointsFiles = api_routes),
    (data = general_specs),
);