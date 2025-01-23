use wasm_bindgen::prelude::*;

// Expose the image paths to JavaScript
#[wasm_bindgen]
pub fn get_image_path(image_name: &str) -> String {
    match image_name {
        "bannerImage" => String::from("./assets/img/bannerImage.png"),
        "logoImage" => String::from("./assets/img/logoImage.png"),
        "background" => String::from("./assets/img/background.png"),
        _ => String::from("./assets/img/default.png"), // Default image
    }
}
