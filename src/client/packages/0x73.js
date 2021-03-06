import PackageBase from 'core/package-base'
import { Package } from 'component/helpers'

import { actions as ping } from 'component/ping';

class _0x73 extends PackageBase {

    constructor() {
        super(0x73, 0x0002);

        this.description = 'Ping / Pong';
    }

    // @TODO: Cached function
    create = () => {
        const result = new Package(this.length);

        result.append(this.number, 0x00);

        return result
    };

    action = ({ dispatch, getState }) => {
        const state = getState().ping;
        dispatch(ping.receive());

        setTimeout(() => dispatch(ping.sendMaster()), state.intervalList[state.intervalSelected]);
    }

}

export default _0x73;
