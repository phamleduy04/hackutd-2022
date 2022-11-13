const Client = require('@veryfi/veryfi-sdk');
const client_id = 'vrfdo31AeprE4IGY9CaDjBdo4AYPiSuJSXPspS6';
const client_secret = 'WgcNo6rs2us0TopDewHo0y0HgOtcAHG87C6cI9PF8YH2YHIo88Wjf0r1WP3aEtEH31jvL81GExUf3zytxv9AcWDnUhbWYS8XyDCYVWJSOdu7XkGMlIPBJBbfWO74LhV3';
const username = 'phamleduy04';
const api_key = 'afeef0fcaf619ab2e1a8d063cda585d3';

const categories = ['Grocery', 'Utilities', 'Travel'];
const file_path = './costco.JPG';

let veryfi_client = new Client(client_id, client_secret, username, api_key);

(async () => {
    let response = await veryfi_client.process_document(file_path, categories);
    console.log(response);
})();


