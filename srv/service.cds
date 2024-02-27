using { db } from '../db/schema';


service serv {
    entity parent as projection  on db.parent;

}