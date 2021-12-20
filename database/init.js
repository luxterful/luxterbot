db = new Mongo().getDB("luxterbot");
db.createCollection("configurations", { capped: false });
db.configurations.insert({ webhookUrl: "", webhookSecret: "" });
