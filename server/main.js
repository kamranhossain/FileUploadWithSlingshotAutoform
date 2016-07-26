Slingshot.fileRestrictions("fileUploadDirective", {
    allowedFileTypes: ["application/pdf","application/msword"],
    maxSize: 10 * 1024 * 1024,
});

Slingshot.createDirective("fileUploadDirective", Slingshot.S3Storage, {
    AWSAccessKeyId: "Key puts here",
    AWSSecretAccessKey: "Key puts here",
    bucket: "Bucket Name puts here",
    acl: "public-read",
    region: "region name puts in here",


    authorize: function () {
        if (!this.userId) {
            var message = "Please login before uploading files";
            throw new Meteor.Error("Login Required", message);
        }

        return true;
    },

    key: function (file) {
        var currentUserId = Meteor.user();
        return currentUserId + "/" + file.name;
    }

});

