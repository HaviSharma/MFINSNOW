import '@servicenow/sdk/global'

declare global {
      namespace Now {
                namespace Internal {
                              interface Keys extends KeysRegistry {
                                                explicit: {
                                                                      bom_json: {
                                                                                                table: 'sys_module'
                                                                                                id: 'bfcca93c22184f6e995e2e15893dc823'
                                                                      }
                                                                      package_json: {
                                                                          table: 'sys_module'
                                                                          id: '5e582b0c75aa46aa9e1c01f7c10539c1'
                                                                      }
                                                }
                                                composite: [
                                                  {
                                                        table: 'sys_user_role'
                                                        id: '1a506b60473bc310c54ce48b416d43cc'
                                                        key: {
                                                            name: 'x_drtes_mfin.admin'
                                                        }
                                                  },
                                                  {
                                                        table: 'sys_user_role'
                                                        id: '92506b60473bc310c54ce48b416d43e5'
                                                        key: {
                                                            name: 'x_drtes_mfin.user'
                                                        }
                                                  },
                                                ]
                              }
                }
      }
}
