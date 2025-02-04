use wasm_bindgen::prelude::*;
use serde::{Serialize};
use serde_json::json;

#[wasm_bindgen]
#[derive(Serialize)]
struct LanguageData {
    about: String,
    start: String,
    new_invest: String,
    new_global: String,
    adventure: String,
    create: String,
    trust: String,
    value: String,
}

#[wasm_bindgen]
pub fn language_manager(lang: &str)->String{
    let kor = LanguageData{
        about: "NTI는 새로운 땅이라는 의미를 담고 있으며, 이는 우리가 추구하는 비전과 가치의 핵심입니다. Neo Terra는 단순한 지리적 개념을 넘어, 기존의 틀을 깨고 미래로 나아가는 새로운 기회와 가능성의 공간을 상징합니다. 변화하는 시장 속에서 우리는 끊임없이 새로운 투자와 혁신적인 아이디어를 통해 한계를 넘어 지속 가능한 성장을 이루고자 합니다.".to_string(),
        start: "새로운 도전과 확장의 공간이며, 혁신을 통해 세상에 긍정적인 변화를 이끌어가는 기반입니다.".to_string(),
        new_invest: "우리는 전통적인 투자 방식에서 벗어나, 미래를 위한 혁신적이고 창의적인 투자에 집중합니다.".to_string(),
        new_global: "기술, 환경, 지속 가능성을 고려한 전략적 투자를 통해 글로벌 시장에서 영향력을 확대해 나갑니다.".to_string(),
        adventure: "빠르게 변화하는 시장에서 유연하고 민첩하게 움직이며, 새로운 시장을 선도합니다.".to_string(),
        create: "도전을 두려워하지 않고, 가치 창출을 위해 끊임없이 고민하고 실행합니다.".to_string(),
        trust: "고객과의 신뢰를 바탕으로 지속 가능한 성장을 추구합니다.".to_string(),
        value: "사회와 환경을 고려한 책임 있는 투자로 더 나은 미래를 만듭니다.".to_string(),
    };

    let eng = LanguageData {
        about: "NTI embodies the meaning of \"New Land,\" which lies at the core of our vision and values. Neo Terra goes beyond a simple geographical concept. It symbolizes a space of new opportunities and possibilities that break away from traditional boundaries and move toward the future. In an ever-changing market, we strive to achieve sustainable growth by constantly pursuing new investments and innovative ideas that push beyond limits.".to_string(),
        start: "A space for new challenges and expansion, serving as a foundation for driving positive change in the world through innovation.".to_string(),
        new_invest: "We move beyond traditional investment methods to focus on innovative and creative investments for the future.".to_string(),
        new_global: "We expand our global influence through strategic investments that prioritize technology, the environment, and sustainability.".to_string(),
        adventure: "We lead emerging markets with agility and flexibility in rapidly changing industries.".to_string(),
        create: "We embrace challenges without fear and continuously strive for value creation through thoughtful execution.".to_string(),
        trust: "We pursue sustainable growth based on trust with our customers.".to_string(),
        value: "We create a better future through responsible investments that consider society and the environment.".to_string(),
    };

    match lang {
        "kor" => serde_json::to_string(&kor).unwrap(),
        "eng" => serde_json::to_string(&eng).unwrap(),
        _ => json!({"error": "Language not supported"}).to_string(),
    }
}