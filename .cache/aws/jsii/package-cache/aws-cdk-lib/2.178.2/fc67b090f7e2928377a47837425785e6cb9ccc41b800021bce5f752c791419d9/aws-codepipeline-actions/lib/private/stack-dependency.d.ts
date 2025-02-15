import * as iam from '../../../aws-iam';
import * as s3 from '../../../aws-s3';
/**
 * Create a dependency between the stack of the replication bucket and the stack of the action role
 *
 * If the deployment action happens in across-account/cross-region fashion, we
 * create two support stacks (stack R for the cross-account role, and stack B for the
 * cross-region replication bucket), but these stacks are not related to each
 * other by default.
 *
 * To make it more interesting, if these are roles with autogenerated names, the
 * stacks have bidirectional policies: the bucket and key (B) refer to the role
 * (R), and the role (R) refers to the bucket and key (B). This is an
 * unfortunate way of setting up the policies, and it should really be
 * completely replaced with a tag-based mechanism.
 *
 * Until then, we've determined that deployment accidentally works fine if we deploy
 * the account stack R first, followed by the region stack B. So explicitly establish
 * this dependency in CodePipeline Actions.
 */
export declare function forceSupportStackDependency(bucket: s3.IBucket, role: iam.IRole): void;
