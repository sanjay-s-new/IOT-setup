"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DEFAULT_PASSWORD_EXCLUDE_CHARS=void 0,exports.setupS3ImportExport=setupS3ImportExport,exports.engineDescription=engineDescription,exports.defaultDeletionProtection=defaultDeletionProtection,exports.renderCredentials=renderCredentials,exports.renderSnapshotCredentials=renderSnapshotCredentials,exports.helperRemovalPolicy=helperRemovalPolicy,exports.renderUnless=renderUnless,exports.applyDefaultRotationOptions=applyDefaultRotationOptions;var iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},errors_1=()=>{var tmp=require("../../../core/lib/errors");return errors_1=()=>tmp,tmp},database_secret_1=()=>{var tmp=require("../database-secret");return database_secret_1=()=>tmp,tmp},props_1=()=>{var tmp=require("../props");return props_1=()=>tmp,tmp};exports.DEFAULT_PASSWORD_EXCLUDE_CHARS=" %+~`#$&*()|[]{}:;<>?!'/@\"\\";function setupS3ImportExport(scope,props,combineRoles){let s3ImportRole=props.s3ImportRole,s3ExportRole=props.s3ExportRole;if(props.s3ImportBuckets&&props.s3ImportBuckets.length>0){if(props.s3ImportRole)throw new(errors_1()).ValidationError("Only one of s3ImportRole or s3ImportBuckets must be specified, not both.",scope);s3ImportRole=combineRoles&&s3ExportRole?s3ExportRole:new(iam()).Role(scope,"S3ImportRole",{assumedBy:new(iam()).ServicePrincipal("rds.amazonaws.com")});for(const bucket of props.s3ImportBuckets)bucket.grantRead(s3ImportRole)}if(props.s3ExportBuckets&&props.s3ExportBuckets.length>0){if(props.s3ExportRole)throw new(errors_1()).ValidationError("Only one of s3ExportRole or s3ExportBuckets must be specified, not both.",scope);s3ExportRole=combineRoles&&s3ImportRole?s3ImportRole:new(iam()).Role(scope,"S3ExportRole",{assumedBy:new(iam()).ServicePrincipal("rds.amazonaws.com")});for(const bucket of props.s3ExportBuckets)bucket.grantReadWrite(s3ExportRole)}return{s3ImportRole,s3ExportRole}}function engineDescription(engine){return engine.engineType+(engine.engineVersion?.fullVersion?`-${engine.engineVersion.fullVersion}`:"")}function defaultDeletionProtection(deletionProtection,removalPolicy){return deletionProtection??(removalPolicy===core_1().RemovalPolicy.RETAIN?!0:void 0)}function renderCredentials(scope,engine,credentials){let renderedCredentials=credentials??props_1().Credentials.fromUsername(engine.defaultUsername??"admin");return!renderedCredentials.secret&&!renderedCredentials.password&&(renderedCredentials=props_1().Credentials.fromSecret(new(database_secret_1()).DatabaseSecret(scope,"Secret",{username:renderedCredentials.username,secretName:renderedCredentials.secretName,encryptionKey:renderedCredentials.encryptionKey,excludeCharacters:renderedCredentials.excludeCharacters,replaceOnPasswordCriteriaChanges:credentials?.usernameAsString,replicaRegions:renderedCredentials.replicaRegions}),credentials?.usernameAsString?renderedCredentials.username:void 0)),renderedCredentials}function renderSnapshotCredentials(scope,credentials){let renderedCredentials=credentials;if(!renderedCredentials?.secret&&renderedCredentials?.generatePassword){if(!renderedCredentials.username)throw new(errors_1()).ValidationError("`snapshotCredentials` `username` must be specified when `generatePassword` is set to true",scope);renderedCredentials=props_1().SnapshotCredentials.fromSecret(new(database_secret_1()).DatabaseSecret(scope,"SnapshotSecret",{username:renderedCredentials.username,encryptionKey:renderedCredentials.encryptionKey,excludeCharacters:renderedCredentials.excludeCharacters,replaceOnPasswordCriteriaChanges:renderedCredentials.replaceOnPasswordCriteriaChanges,replicaRegions:renderedCredentials.replicaRegions}))}return renderedCredentials}function helperRemovalPolicy(basePolicy){return basePolicy===core_1().RemovalPolicy.RETAIN?core_1().RemovalPolicy.RETAIN:core_1().RemovalPolicy.DESTROY}function renderUnless(value,suppressValue){return value===suppressValue?void 0:value}function applyDefaultRotationOptions(options,defaultvpcSubnets){return{excludeCharacters:exports.DEFAULT_PASSWORD_EXCLUDE_CHARS,vpcSubnets:defaultvpcSubnets,...options}}
