import * as firebase from "./firebase.js";
import * as supabase from "./supabase.js";

export default {
  ...firebase,
  ...supabase,
};
