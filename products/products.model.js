import { Schema,model } from "mongoose";


// Define schemas
const productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: String,
    category: { 
        type: String,
        enum : ['Electronics','Clothing','Home & Kitchen'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    processor: String,
    ram: String,
    storage: String,
    graphics: String,
    display: String,
    weight: String,
    display_size: String,
    resolution: String,
    camera_resolution: String,
    battery_capacity: String,
    screen_size: String,
    os: String,
    display_type: String,
    water_resistance: String,
    sensors: String,
    strap_material: String,
    driver_size: String,
    frequency_response: String,
    noise_cancelling: String,
    sensor_type: String,
    megapixels: String,
    iso_range: String,
    video_resolution: String,
    size: String,
    color: String,
    material: String,
    fit: String,
    style: String,
    pattern: String,
    length: String,
    capacity: String,
    type: String,
    power: String,
    dust_capacity: String,
    speed_settings: String,
    pieces: String,
    oven_safe: String,
    dishwasher_safe: String,
    slots: String,
    settings: String,
 
})

export const productSchema = model('productCategory', productsSchema);