db = new Mongo().getDB("luxterbot");
db.createCollection("collections", { capped: false });
db.collections.insert({ webhookUrl: null, webhookSecret: null });
