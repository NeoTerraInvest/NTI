use wasm_bindgen::prelude::*;

// JavaScript에서 호출 가능한 함수
#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! This is Rust and WebAssembly.", name)
}
