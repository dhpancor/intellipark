import { ExtractJwt, Strategy, VerifyCallback } from 'passport-jwt';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'test123'
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
