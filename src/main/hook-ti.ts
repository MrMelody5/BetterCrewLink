/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from 'ts-interface-checker';
// tslint:disable:object-literal-key-quotes

export const IOffsets = t.iface([], {
	'meetingHud': t.array('number'),
	'meetingHudCachePtr': t.array('number'),
	'meetingHudState': t.array('number'),
	'gameState': t.array('number'),
	'allPlayersPtr': t.array('number'),
	'allPlayers': t.array('number'),
	'playerCount': t.array('number'),
	'playerAddrPtr': 'number',
	'exiledPlayerId': t.array('number'),
  'gameCode': t.array('number'),
  'hostId': t.array('number'),
  'clientId': t.array('number'),
	'player': t.iface([], {
		'isLocal': t.array('number'),
		'localX': t.array('number'),
		'localY': t.array('number'),
		'remoteX': t.array('number'),
		'remoteY': t.array('number'),
		'offsets': t.array('number'),
		'inVent': t.array('number'),
		'bufferLength': 'number',
		'struct': t.array(t.iface([], {
			'type': 'string',
			'skip': t.opt('number'),
			'name': 'string',
		})),
	}),
});

const exportedTypeSuite: t.ITypeSuite = {
	IOffsets,
};
export default exportedTypeSuite;
