/**
 * This class to make it easier to use database (mongodb in this case)
 * This class will make this database to a key-value database
 */

 class Collection {
    /**
     *
     * @param {*} collection Collection in the database
     * @param {*} session Current session while using database
     */
    constructor(collection, session) {
        this.collection = collection;
        this.session = session;
    }
    /**
     * Return if the key is exist in the database
     * @param {*} key
     * @returns Promise<boolean>
     */
    async has(key) {
        if (!key) throw new Error('Key is required');
        try {
            const { data } = (await this.collection.findOne({ ID: key })) || {};
            return typeof data !== 'undefined';
        }
        catch {
            return false;
        }
    };

    /**
     * Get the value of the key
     * @param {*} key
     * @returns * (value of the key)
     */
    async get(key) {
        if (!key) throw new Error('Key is required');
        const { data } = (await this.collection.findOne({ ID: key })) || {};
        return data;
    };

    /**
     * Set the value of the key
     * @param {*} key
     * @param {*} value
     * @returns * (value of the key)
     */
    async set(key, value) {
        if (!key) throw new Error('Key is required');
        if (value === undefined || value === null) throw new Error('Value is required');
        const data = await this.collection.updateOne({ ID: key }, { $set: { data: value } }, { upsert: true });
        if (data.modifiedCount > 0 || data.upsertedCount > 0) return data;
    };

    /**
     * Delete the key
     * @param {*} key
     * @returns boolean
     */
    async delete(key) {
        if (!key) throw new Error('Key is required');
        const data = await this.collection.deleteOne({ ID: key });
        if (data.deletedCount > 0) return true;
        else return false;
    }


    /**
     * Drop the database (delete all data)
     * @returns Promise<boolean>
     */
    async drop() {
        try {
            return await this.collection.drop();
        }
        catch {
            return false;
        }
    }

    /**
     * Get all data in the database
     * @returns Promise<Array>
    */
    async all() {
        return await this.collection.find({}, { session: this.session }).toArray();
    }

    /**
     * Push the value to the array
     * If the key is not exist on database, it will create the key with the value as array
     */
    async push(key, value) {
        let data = this.get(key);
        if (!data || !Array.isArray(data)) data = [];
        return await this.set(key, [...data, value]);
    }
}

module.exports = Collection;