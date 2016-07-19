# -*- coding: utf-8 -*-

import unittest

from envparse import env


class PoliticlEnvTest(unittest.TestCase):
    def test_politicl_env(self):
        self.assertEqual(env.str('WD_USER'), 'trujunzhang')
        self.assertEqual(env.str('WD_PASSWD'), 'wanghao720')
        self.assertEqual(env.int('scraped_pages_count'), 10)
        pass
