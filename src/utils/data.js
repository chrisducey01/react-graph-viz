const nodes = [
    {
        id: "Ford",
        name: "Ford",
        type: "Make"
    },
    {
        id: "Bronco",
        name: "Bronco",
        type: "Model"
    },
    {
        id: "Explorer",
        name: "Explorer",
        type: "Model"
    },
    {
        id: "Escape",
        name: "Escape",
        type: "Model"
    },
    {
        id: "Jeep",
        name: "Jeep",
        type: "Make"
    },
    {
        id: "Grand Cherokee",
        name: "Grand Cherokee",
        type: "Model"
    },
    {
        id: "Wrangler",
        name: "Wrangler",
        type: "Model"
    },
    {
        id: "Pontiac",
        name: "Pontiac",
        type: "Make"
    },
    {
        id: "Grand Le Mans",
        name: "Grand Le Mans",
        type: "Model"
    },
    {
        id: "Grand Cherokee 4xe PHEV",
        name: "Grand Cherokee 4xe PHEV",
        type: "Model"
    }
];

const links = [
    {
        source: "Bronco",
        target: "Ford"
    },
    {
        source: "Explorer",
        target: "Ford"
    },
    {
        source: "Escape",
        target: "Ford"
    },
    {
        source: "Grand Cherokee",
        target: "Jeep"
    },
    {
        source: "Wrangler",
        target: "Jeep"
    },
    {
        source: "Grand Le Mans",
        target: "Pontiac"
    },
    {
        source: "Grand Cherokee 4xe PHEV",
        target: "Jeep"
    }
];

export const graph_data = {
    nodes: nodes,
    links: links
};

