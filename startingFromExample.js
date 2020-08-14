/* 
    This is starting point to a task and workflow management app
    To make things clear and fun, this start point use a concept of a well known board game 'LangRenSha'
    Basically this game is a repeatable wrokflow, with each role fulfill a spacific task.
    It's a good starting point to think about the senario and real life usgae.

    For initial development we should firstly
        1.define roles
        2.apply roles to participant
        3.define workflow
        4.define task each participant shoud fulfil before closed the task

    Let complete this example with functional programming and task&workflow mangement concept in mind. 
    Also keep in mind information shouldn't be out there in the refStore, who should read which data should 
    be considered a feature
*/
// actions
const CREATE = 'CREATE';
const CLOSE = 'CLOSE';
const NEXT = 'NEXT';
const PAUSE = 'PASUE';
const REPEAT = 'REPEAT';

const defaultActions = [ CREATE, CLOSE, NEXT, PAUSE ];
// etc.......

const getWorkFlowActions  =  ( action ) => ( before, after ) => {};
const getTaskActions  =  ( action ) => ( before, after ) => {};


// applyRole 
const applyRole = (role)=>{};

// difine role
const judge =  {
    workflow: {
        actionPrivilege: [CLOSE, REPEAT]
    },
    task: {
        actionPrivilege: defaultActions
    }
};
const civilian =  {
    workflow: {
        actionPrivilege: [CLOSE]
    },
    task: {
        actionPrivilege: defaultActions
    }
};
const wolf =  {
    workflow: {
        actionPrivilege: [CLOSE]
    },
    task: {
        actionPrivilege: defaultActions
    }
};
const wizard =  {
    workflow: {
        actionPrivilege: [CLOSE]
    },
    task: {
        actionPrivilege: defaultActions
    }
};

// define participant
const a = applyRole(judge);
const b = applyRole(civilian);
const c = applyRole(civilian);
const d = applyRole(civilian);
const e = applyRole(wizard);
const f = applyRole(wolf);
const g = applyRole(wolf);


//define workflow
const workflow = [
    {
        stage: [
            {
                role:'wolf',
                workflows: [
                    [],
                    [],
                    [], // task is a one step workflow, a task should be able to become a multi step wokflow
                ],
                requirement: 'updateRefStore'
            },
            {
                role:'wolf',
                requirement: 'updateRefStore'
            }
        ],
        logic: 'or' // logic default to 'and' (choose from 'or' or 'and')
    },
    {
        stage: [
            {
                role:'wizard',
                requirement: 'updateRefStore'
            },
        ],
    },
    {
        stage: [
            {
                role:'civilian',
                requirement: 'updateDescription'
            },
        ],
    },
    {
        stage: [
            {
                role:'civilian',
                requirement: 'updateDescription'
            },
        ],
    },
    {
        stage: [
            {
                role:'civilian',
                requirement: 'updateDescription'
            },
        ],
    },
    {
        stage: [
            {
                role:'wizard',
                requirement: 'updateDescription'
            },
        ],
    },
    {
        stage: [
            {
                role:'wolf',
                requirement: 'updateDescription'
            },
        ],
    },
    {
        stage: [
            {
                role:'wolf',
                requirement: 'updateDescription'
            },
        ],
    },
    {
        stage: [
            {
                role:'civilian',
                requirement: 'updateRefStore'
            },
            {
                role:'civilian',
                requirement: 'updateRefStore'
            },
            {
                role:'civilian',
                requirement: 'updateRefStore'
            },
            {
                role:'wizard',
                requirement: 'updateRefStore'
            },
            {
                role:'wolf',
                requirement: 'updateRefStore'
            },
            {
                role:'wolf',
                requirement: 'updateRefStore'
            }
        ], 
        logic: 'and'
    }, 
    {
        stage: [
            {
                role:'judge',
                requirement: 'changeParticipantWorkflowStatus'
            },
        ],
    },
];