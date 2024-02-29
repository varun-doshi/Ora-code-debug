//@ts-ignore
import { Bytes, Block, Event, Address, require } from "@ora-io/cle-lib";

// deployed contract address on sepolia
let addr = Bytes.fromHexString("0x9Dab03Dd319a7b956C433A20218C7e5008CD3bCa");

//hash(keccak256) of event: CountChanged(uint256)
let esig_countChanged = Bytes.fromHexString(
  "0x0ef4482aceb854636f33f9cd319f9e1cd6fe3aa2e60523f3583c287b89382445"
);

export function handleBlocks(blocks: Block[]): Bytes {
  // init output state
  let state: Bytes;

  let events: Event[] = blocks[0].events;
  let latestEvent: Event | null = null;

  //checks if any of the latest block has the event we are looking for
  for (let i = 0; i < events.length; i++) {
    if (events[i].esig == esig_countChanged && events[i].address == addr) {
      latestEvent = events[i];
      break;
    }
  }

  if (latestEvent != null) {
    //returns payload which is function Signature of: function addValue()
    let functionSelector = Bytes.fromHexString("0x040f0aee");

    return functionSelector;
  } else {
    //random
    return Bytes.fromI32(0);
  }
}
//events are triggered at blocks: 5380575
//  and                           5387559
//deployed contract: https://sepolia.etherscan.io/address/0x9dab03dd319a7b956c433a20218c7e5008cd3bca
//graph contract: https://sepolia.etherscan.io/address/0x7d77708434b924637e99e295d62f7ec7560cc000
//ipfs image: https://bafybeie5k6pydch2xvtypaso6vanpauyhvdg2b3s3ccn5m5tgclssajn4i.ipfs.dweb.link/
