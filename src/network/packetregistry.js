import { Packet } from './packet';
import { GlobalState } from '../state/globalstate';

export class PacketRegistry {
    constructor(globalState) {
        this.registry = {};

        globalState.register(this);
    }

    registerPacket(packetId, handler) {
        this.registry[packetId] = handler;

        console.log('registerPacket', packetId);
        console.log(this.registry);
    }
    canHandle(packet) {
        return !!this.registry[packet.getId()];
    }
    handle(packet) {
        if (packet instanceof Packet) {
            const id = packet.getId();

            this.registry[id](packet);
        } else {
            throw 'handler called for non packet';
        }
    }
}