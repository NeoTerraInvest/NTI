use wasm_bindgen::prelude::*;

mod language_manager;
pub use crate::language_manager::language_manager;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! This is Rust and WebAssembly.", name)
}
