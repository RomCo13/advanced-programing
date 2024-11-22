import mongoose from "mongoose";

export function connect(connectionString) {
    return mongoose.connect(connectionString);
}

export function disconnect() {
    return mongoose.disconnect();
}