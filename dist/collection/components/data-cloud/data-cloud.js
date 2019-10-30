import { h } from "@stencil/core";
import Fragment from 'stencil-fragment';
export class MyComponent {
    /**
     * The first name
     */
    render() {
        // if(!this.isLoading){
        //   TagCanvas.Start
        // }
        return (h(Fragment, null,
            h("div", { id: "tags" },
                h("ul", null,
                    h("li", null,
                        h("a", { href: "#", "data-weight": "14" }, "action hero")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "15" }, "alternate history")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "16" }, "ambiguous ending ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "17" }, "americana")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "18" }, "anime")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "19" }, "anti hero")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "20" }, "avant-garde")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "10" }, "b movie")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "11" }, "bank heist ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "12" }, "based on book")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "13" }, "based on play")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "14" }, "based on comic ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "15" }, "based on comic book")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "16" }, "based on novel ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "17" }, "based on novella ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "18" }, "based on short story ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "19" }, "battle ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "20" }, "betrayal ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "10" }, "biker")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "11" }, "black comedy ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "12" }, "blockbuster")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "13" }, "bollywood")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "14" }, "breaking the fourth wall ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "15" }, "business ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "16" }, "caper")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "17" }, "car accident ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "18" }, "car chase")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "19" }, "car crash")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "20" }, "character name in title")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "10" }, "character's point of view camera shot")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "11" }, "chick flick")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "12" }, "coming of age")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "13" }, "competition")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "14" }, "conspiracy ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "15" }, "corruption ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "16" }, "criminal mastermind")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "17" }, "cult ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "18" }, "cult film")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "19" }, "cyberpunk")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "20" }, "dark hero")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "10" }, "deus ex machina")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "11" }, "dialogue driven")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "12" }, "dialogue driven storyline")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "13" }, "directed by star ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "14" }, "director cameo ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "15" }, "double cross ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "16" }, "dream sequence ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "17" }, "dystopia ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "18" }, "ensemble cast")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "19" }, "epic ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "20" }, "espionage")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "10" }, "experimental ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "11" }, "experimental film")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "12" }, "fairy tale ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "13" }, "famous line")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "14" }, "famous opening theme ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "15" }, "famous score ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "16" }, "fantasy sequence ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "17" }, "farce")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "18" }, "father daughter relationship ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "19" }, "father son relationship")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "20" }, "femme fatale ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "10" }, "fictional biography")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "11" }, "flashback")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "12" }, "french new wave")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "13" }, "futuristic ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "14" }, "good versus evil ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "15" }, "heist")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "16" }, "hero ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "17" }, "high school")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "18" }, "husband wife relationship")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "19" }, "idealism ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "20" }, "independent film ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "10" }, "investigation")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "11" }, "kidnapping ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "12" }, "knight ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "13" }, "kung fu")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "14" }, "macguffin")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "15" }, "medieval times ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "16" }, "mockumentary ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "17" }, "monster")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "18" }, "mother daughter relationship ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "19" }, "mother son relationship")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "20" }, "multiple actors playing same role")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "10" }, "multiple endings ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "11" }, "multiple perspectives")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "12" }, "multiple storyline ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "13" }, "multiple time frames ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "14" }, "murder ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "15" }, "musical number ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "16" }, "neo noir ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "17" }, "neorealism ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "18" }, "ninja")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "19" }, "no background score")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "20" }, "no music ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "10" }, "no opening credits ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "11" }, "no title at beginning")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "12" }, "nonlinear timeline ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "13" }, "on the run ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "14" }, "one against many ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "15" }, "one man army ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "16" }, "opening action scene ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "17" }, "organized crime")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "18" }, "parenthood ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "19" }, "parody ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "20" }, "plot twist ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "10" }, "police corruption")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "11" }, "police detective ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "12" }, "post-apocalypse")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "13" }, "postmodern ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "14" }, "psychopath ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "15" }, "race against time")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "16" }, "redemption ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "17" }, "remake ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "18" }, "rescue ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "19" }, "road movie ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "20" }, "robbery")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "10" }, "robot")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "11" }, "rotoscoping")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "12" }, "satire ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "13" }, "self sacrifice ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "14" }, "serial killer")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "15" }, "shakespeare")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "16" }, "shootout ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "17" }, "show within a show ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "18" }, "slasher")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "19" }, "southern gothic")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "20" }, "spaghetti western")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "10" }, "spirituality ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "11" }, "spoof")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "12" }, "steampunk")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "13" }, "subjective camera")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "14" }, "superhero")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "15" }, "supernatural ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "16" }, "surprise ending")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "17" }, "swashbuckler ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "18" }, "sword and sandal ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "19" }, "tech-noir")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "20" }, "time travel")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "10" }, "title spoken by character")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "11" }, "told in flashback")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "12" }, "vampire")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "13" }, "virtual reality")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "14" }, "voice over narration ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "15" }, "whistleblower")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "16" }, "wilhelm scream ")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "17" }, "wuxia")),
                    h("li", null,
                        h("a", { href: "#", "data-weight": "18" }, "zombie"))))));
    }
    static get is() { return "data-cloud"; }
    static get originalStyleUrls() { return {
        "$": ["data-cloud.css"]
    }; }
    static get styleUrls() { return {
        "$": ["data-cloud.css"]
    }; }
}
