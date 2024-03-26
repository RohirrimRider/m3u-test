module.exports={
    id: "org.community.YourIPTV",
    version: "2.0.0",
    name: "Stremio IPTV",
    logo: "https://setplex.com/blog/wp-content/uploads/2017/08/iptv-business.jpg",
    description: "STREMIO IPTV",
    types: ["movie", "series","tv","channel"],
    background: "https://raw.githubusercontent.com/mik25/stremaline/main/blownaway.jpg",
    resources: ["movie","series","tv"],
    catalogs: [],
    idPrefixes: ["yiptv:"],
    behaviorHints:{configurable : true, configurationRequired: true },
};
