import { ExtractJwt, Strategy, VerifyCallback } from 'passport-jwt';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

export const JWT_SECRET = 'eFybCt2&E%@rC+8paUmWU2M_2R^ndJp+-zk5_x$tV8Khmt^ywW8DtEV=QZ_HfbPY';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
};

const verify: VerifyCallback = async (payload, done) => {
  let user = null;
  try {
    user = await getRepository(User).findOneOrFail(payload.id);
    done(null, user);
  } catch (e) {
    done(e, null);
  }
};

export const JWTStrategyConfig = new Strategy(options, verify);
