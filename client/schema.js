Files.attachSchema(new SimpleSchema({
    title: {
        type: String,
        max: 80
    },
    file: {
        type: String,
        autoform: {
            type: 'slingshotFileUpload',
            afFieldInput: {
                key: 'file',
                slingshotdirective: {
                    directive: 'fileUploadDirective',
                }
            }
        }
    }

}));



