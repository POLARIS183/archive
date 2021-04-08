import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "https://polaris183.github.io/archive/jscript/345789566/Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "https://polaris183.github.io/archive/jscript/345789566/Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.t = 19;
  }
}
