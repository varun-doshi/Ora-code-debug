//@ts-ignore
import { Bytes, Block, Event, Address, require } from "@ora-io/cle-lib";

let addr = Bytes.fromHexString("0x9Dab03Dd319a7b956C433A20218C7e5008CD3bCa");
let esig_countChanged = Bytes.fromHexString(
  "0x0ef4482aceb854636f33f9cd319f9e1cd6fe3aa2e60523f3583c287b89382445"
);

export function handleBlocks(blocks: Block[]): Bytes {
  // init output state
  let state: Bytes;

  let events: Event[] = blocks[0].events;
  let latestEvent: Event | null = null;
  for (let i = 0; i < events.length; i++) {
    if (events[i].esig == esig_countChanged && events[i].address == addr) {
      latestEvent = events[i];
      break;
    }
  }
  if (latestEvent != null) {
    let functionSelector = Bytes.fromHexString("0x040f0aee");

    return functionSelector;
  } else {
    return Bytes.fromI32(0);
  }
}
