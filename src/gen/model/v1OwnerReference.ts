/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
*/
export class V1OwnerReference {
    /**
    * API version of the referent.
    */
    'apiVersion': string;
    /**
    * If true, AND if the owner has the \"foregroundDeletion\" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs \"delete\" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
    */
    'blockOwnerDeletion'?: boolean;
    /**
    * If true, this reference points to the managing controller.
    */
    'controller'?: boolean;
    /**
    * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    */
    'kind': string;
    /**
    * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
    */
    'name': string;
    /**
    * UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
    */
    'uid': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "blockOwnerDeletion",
            "baseName": "blockOwnerDeletion",
            "type": "boolean"
        },
        {
            "name": "controller",
            "baseName": "controller",
            "type": "boolean"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1OwnerReference.attributeTypeMap;
    }
}
